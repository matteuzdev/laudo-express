import resend
import os

# API Key do Resend do Soberano
RESEND_API_KEY = "re_G4CHLeXM_8rNvV569EAVzf2A2FYnvbbQm"
resend.api_key = RESEND_API_KEY

def send_magic_email(email: str, login_url: str):
    """
    Envia o e-mail de acesso de elite via Resend.
    """
    try:
        params = {
            "from": "Inspectify <onboarding@resend.dev>", # Em prod, trocar pelo domínio do Soberano
            "to": [email],
            "subject": "Sua Chave de Acesso ao Inspectify",
            "html": f"""
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff; border-radius: 20px;">
                    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Bem-vindo ao Inspectify</h1>
                    <p style="color: #a1a1aa; font-size: 16px; line-height: 1.5;">Clique no botão abaixo para autenticar sua sessão e acessar seu painel de inspeções.</p>
                    <div style="margin: 30px 0;">
                        <a href="{login_url}" style="background-color: #fff; color: #000; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">ACESSAR AGORA</a>
                    </div>
                    <p style="color: #52525b; font-size: 12px;">Este link expira em 15 minutos. Se você não solicitou este acesso, ignore este e-mail.</p>
                    <hr style="border: 0; border-top: 1px solid #27272a; margin: 30px 0;" />
                    <p style="color: #71717a; font-size: 10px; letter-spacing: 2px;">IMPÉRIO KONIG • TECNOLOGIA DE ELITE</p>
                </div>
            """,
        }
        resend.Emails.send(params)
        return True
    except Exception as e:
        print(f"Erro ao enviar e-mail: {e}")
        return False
