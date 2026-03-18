from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from datetime import datetime
import os

class InspectGenerator:
    def __init__(self, output_path: str):
        self.output_path = output_path
        self.styles = getSampleStyleSheet()
        self.custom_style = ParagraphStyle(
            'KonigStyle',
            parent=self.styles['Normal'],
            fontSize=10,
            textColor=colors.black,
            spaceAfter=12
        )

    def generate(self, dados_InspeÁ„o: dict, fotos: list):
        """
        Gera um PDF profissional de InspeÁ„o.
        dados_InspeÁ„o: {endereco, cliente, data, inspetor}
        fotos: [{path, comodo, nota}]
        """
        doc = SimpleDocTemplate(self.output_path, pagesize=A4)
        story = []

        # 1. Cabe√ßalho de Elite
        titulo = Paragraph(f"<b>RelatÛrio de InspeÁ„o IMOBILI√ÅRIA</b>", self.styles['Title'])
        story.append(titulo)
        story.append(Spacer(1, 12))

        # 2. Informa√ß√µes da Propriedade
        info_data = [
            [f"Im√≥vel:", dados_InspeÁ„o['endereco']],
            [f"Cliente:", dados_InspeÁ„o['cliente']],
            [f"Data:", dados_InspeÁ„o['data']],
            [f"Inspetor:", dados_InspeÁ„o['inspetor']]
        ]
        t = Table(info_data, colWidths=[100, 350])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (0, -1), colors.whitesmoke),
            ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
            ('PADDING', (0, 0), (-1, -1), 6),
        ]))
        story.append(t)
        story.append(Spacer(1, 24))

        # 3. Fotos e Observa√ß√µes por C√¥modo
        comodos = {}
        for foto in fotos:
            if foto['comodo'] not in comodos:
                comodos[foto['comodo']] = []
            comodos[foto['comodo']].append(foto)

        for comodo, lista_fotos in comodos.items():
            story.append(Paragraph(f"<b>C√îMODO: {comodo.upper()}</b>", self.styles['Heading2']))
            story.append(Spacer(1, 6))

            for f in lista_fotos:
                # Se a foto existir no disco, adiciona ao PDF
                if os.path.exists(f['path']):
                    img = Image(f['path'], width=400, height=300)
                    story.append(img)
                    story.append(Spacer(1, 6))
                
                if f['nota']:
                    story.append(Paragraph(f"<i>Nota: {f['nota']}</i>", self.custom_style))
                story.append(Spacer(1, 12))

        # 4. Rodap√©
        story.append(Spacer(1, 24))
        footer = Paragraph(f"Gerado em {datetime.now().strftime('%d/%m/%Y %H:%M')} por Inspectify.", self.styles['Italic'])
        story.append(footer)

        doc.build(story)
        return self.output_path

# Exemplo de uso r√°pido para teste do bando
if __name__ == "__main__":
    generator = InspectGenerator("exemplo_laudo.pdf")
    dados = {
        "endereco": "Rua das Flores, 123 - Centro",
        "cliente": "Imobili√°ria Sert√£o Verde",
        "data": "18/03/2026",
        "inspetor": "Soberano Hianto"
    }
    # Simulando fotos (precisaria de arquivos reais para testar o bin√°rio)
    fotos = [
        {"path": "print.png", "comodo": "Sala", "nota": "Pintura com leves descascados na parede sul."},
        {"path": "print2.png", "comodo": "Cozinha", "nota": "Pia em perfeito estado, sem vazamentos."}
    ]
    # generator.generate(dados, fotos) # Descomentar ap√≥s ter fotos reais no diret√≥rio

