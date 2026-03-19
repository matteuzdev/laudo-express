from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from .core.auth import create_magic_link_token, verify_magic_link_token
from .core.pdf_generator import InspectGenerator
import uvicorn
import os

app = FastAPI(title="Inspectify API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SyncFoto(BaseModel):
    comodo: str
    nota: str
    url: Optional[str] = None # Para suportar fotos reais futuramente

class SyncPayload(BaseModel):
    inspectId: str
    endereco: str
    cliente: str
    fotos: List[SyncFoto]

@app.get("/")
async def root():
    return {"status": "online", "message": "Imperio Konig: Inspectify API"}

@app.post("/auth/magic-link")
async def send_magic_link(email: str):
    token = create_magic_link_token(email)
    frontend_url = os.getenv("FRONTEND_URL", "http://localhost:3000")
    login_url = f"{frontend_url}/login/verify?token={token}"
    
    # Nota: O servico de email deve ser chamado aqui
    print(f"\n[AUTH] Link gerado para {email}: {login_url}\n")
    return {"message": "Link de acesso gerado com sucesso!"}

@app.post("/vistoria/sync")
async def sync_inspection(payload: SyncPayload):
    """
    Endpoint principal de sincronizacao e geracao de relatorios.
    """
    print(f"[*] Recebendo dados da Inspecao: {payload.inspectId}")
    
    output_dir = "laudos"
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, f"relatorio_{payload.inspectId}.pdf")
    
    try:
        generator = InspectGenerator(output_path)
        dados = {
            "endereco": payload.endereco,
            "cliente": payload.cliente,
            "data": "18/03/2026",
            "inspetor": "Soberano Hianto"
        }
        
        # Converte o payload de fotos para o formato do gerador
        fotos_processadas = []
        for f in payload.fotos:
            fotos_processadas.append({
                "path": "public/placeholder.png", # Placeholder enquanto o upload real nao e ativado
                "comodo": f.comodo,
                "nota": f.nota
            })
            
        generator.generate(dados, fotos_processadas)
        
        return {
            "status": "success", 
            "message": "Relatorio gerado com sucesso!",
            "pdf_url": output_path
        }
    except Exception as e:
        print(f"[ERROR] Falha ao gerar PDF: {e}")
        raise HTTPException(status_code=500, detail="Erro interno ao processar o relatório.")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
