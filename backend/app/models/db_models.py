from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Optional, List
from datetime import datetime
import os

# ConfiguraÃ§Ã£o do Banco SQLite Local
sqlite_file_name = "laudo_express.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
engine = create_engine(sqlite_url, echo=False)

# Modelos (Tabelas do Banco)
class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    full_name: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    plan: str = Field(default="starter")

class Inspeção(SQLModel, table=True):
    id: str = Field(primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    endereco: str
    data: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="pendente")
    cliente_nome: str

class Foto(SQLModel, table=True):
    id: str = Field(primary_key=True)
    Inspeção_id: str = Field(foreign_key="Inspeção.id")
    comodo: str
    nota: Optional[str] = None
    data_criacao: datetime = Field(default_factory=datetime.utcnow)
    blob_path: str # Caminho local para o arquivo da foto

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

if __name__ == "__main__":
    create_db_and_tables()

