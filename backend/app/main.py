from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from .core.pdf_generator import InspectGenerator

app = FastAPI(title="Inspectify API")

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
    url: Optional[str] = None

class SyncPayload(BaseModel):
    inspectId: str
    endereco: str
    cliente: str
    fotos: List[SyncFoto]

@app.get("/")
async def root():
    return {"status": "online", "message": "Inspectify API Ativa"}

@app.post("/vistoria/sync")
async def sync_inspection(payload: SyncPayload):
    print(f"[*] Recebendo Sincronizacao: {payload.inspectId}")
    
    output_dir = "laudos"
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, f"relatorio_{payload.inspectId}.pdf")
    
    try:
        generator = InspectGenerator(output_path)
        dados = {
            "endereco": payload.endereco,
            "cliente": payload.cliente,
            "data": "18/03/2026",
            "inspetor": "Usuario Inspectify"
        }
        
        # Converte para o formato do gerador (placeholders por enquanto)
        fotos_processadas = []
        for f in payload.fotos:
            fotos_processadas.append({
                "path": "public/placeholder.png", 
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
        print(f"[ERROR] {e}")
        raise HTTPException(status_code=500, detail="Erro ao gerar o PDF.")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
