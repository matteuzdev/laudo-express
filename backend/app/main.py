from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from .core.auth import create_magic_link_token, verify_magic_link_token
from .core.pdf_generator import LaudoGenerator
import uvicorn
import os

app = FastAPI(title="Laudo Express API", version="0.1.0")

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
    vistoriaId: str
    endereco: str
    cliente: str
    fotos: List[SyncFoto]

@app.get("/")
async def root():
    return {"status": "online", "message": "Império Konig: Laudo Express API"}

@app.post("/auth/magic-link")
async def send_magic_link(email: str):
    token = create_magic_link_token(email)
    login_url = f"http://localhost:3000/login/verify?token={token}"
    print(f"\n📧 LINK DE ACESSO: {login_url}\n")
    return {"message": "Link de acesso gerado com sucesso!"}

@app.get("/auth/verify")
async def verify_token(token: str):
    email = verify_magic_link_token(token)
    if not email:
        raise HTTPException(status_code=401, detail="Link inválido ou expirado.")
    return {"email": email, "status": "authenticated"}

@app.post("/vistoria/sync")
async def sync_vistoria(payload: SyncPayload):
    # 1. Lógica de Sincronização (Em prod, salvaríamos no Postgres e as fotos no S3/Storage)
    print(f"📦 Sincronizando Vistoria: {payload.vistoriaId} - {payload.endereco}")
    
    # 2. Disparar Gerador de PDF (Simulação com ReportLab)
    output_pdf = f"laudos/laudo_{payload.vistoriaId}.pdf"
    os.makedirs("laudos", exist_ok=True)
    
    generator = LaudoGenerator(output_pdf)
    dados = {
        "endereco": payload.endereco,
        "cliente": payload.cliente,
        "data": "18/03/2026", # Em prod pegaria do banco
        "inspetor": "Soberano Hianto"
    }
    
    # Nota: Em prod, baixaríamos as fotos reais do Storage aqui
    # Por enquanto, passamos uma lista vazia ou com placeholders
    generator.generate(dados, []) 
    
    return {"message": "Sincronização concluída!", "pdf_url": output_pdf}
