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

class SyncPayload(BaseModel):
    InspeçãoId: str
    endereco: str
    cliente: str
    fotos: List[SyncFoto]

@app.get("/")
async def root():
    return {"status": "online", "message": "ImpÃ©rio Konig: Inspectify API"}

@app.post("/auth/magic-link")
async def send_magic_link(email: str):
    token = create_magic_link_token(email)
    login_url = f"http://localhost:3000/login/verify?token={token}"
    print(f"\nðŸ“§ LINK DE ACESSO: {login_url}\n")
    return {"message": "Link de acesso gerado com sucesso!"}

@app.get("/auth/verify")
async def verify_token(token: str):
    email = verify_magic_link_token(token)
    if not email:
        raise HTTPException(status_code=401, detail="Link invÃ¡lido ou expirado.")
    return {"email": email, "status": "authenticated"}

@app.post("/Inspeção/sync")
async def sync_Inspeção(payload: SyncPayload):
    # 1. LÃ³gica de SincronizaÃ§Ã£o (Em prod, salvarÃ­amos no Postgres e as fotos no S3/Storage)
    print(f"ðŸ“¦ Sincronizando Inspeção: {payload.InspeçãoId} - {payload.endereco}")
    
    # 2. Disparar Gerador de PDF (SimulaÃ§Ã£o com ReportLab)
    output_pdf = f"laudos/laudo_{payload.InspeçãoId}.pdf"
    os.makedirs("laudos", exist_ok=True)
    
    generator = InspectGenerator(output_pdf)
    dados = {
        "endereco": payload.endereco,
        "cliente": payload.cliente,
        "data": "18/03/2026", # Em prod pegaria do banco
        "inspetor": "Soberano Hianto"
    }
    
    # Nota: Em prod, baixarÃ­amos as fotos reais do Storage aqui
    # Por enquanto, passamos uma lista vazia ou com placeholders
    generator.generate(dados, []) 
    
    return {"message": "SincronizaÃ§Ã£o concluÃ­da!", "pdf_url": output_pdf}

