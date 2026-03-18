import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface LaudoDB extends DBSchema {
  vistorias: {
    key: string;
    value: {
      id: string;
      endereco: string;
      data: string;
      status: 'pendente' | 'concluido' | 'sincronizando';
      cliente: string;
      notas?: string;
    };
    indexes: { 'by-status': string };
  };
  fotos: {
    key: string;
    value: {
      id: string;
      vistoriaId: string;
      blob: Blob;
      comentario?: string;
      comodo: string; // Ex: Cozinha, Sala, Quarto 1
      data: string;
    };
    indexes: { 'by-vistoria': string };
  };
}

const DATABASE_NAME = 'laudo-express-db';
const DATABASE_VERSION = 1;

export async function initDB(): Promise<IDBPDatabase<LaudoDB>> {
  return openDB<LaudoDB>(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      // Tabela de Vistorias
      const vistoriaStore = db.createObjectStore('vistorias', {
        keyPath: 'id',
      });
      vistoriaStore.createIndex('by-status', 'status');

      // Tabela de Fotos
      const fotoStore = db.createObjectStore('fotos', {
        keyPath: 'id',
      });
      fotoStore.createIndex('by-vistoria', 'vistoriaId');
    },
  });
}

// Funções de Acesso (Gatilhos do Bando)
export async function saveVistoria(vistoria: LaudoDB['vistorias']['value']) {
  const db = await initDB();
  return db.put('vistorias', vistoria);
}

export async function getVistorias() {
  const db = await initDB();
  return db.getAll('vistorias');
}

export async function saveFoto(foto: LaudoDB['fotos']['value']) {
  const db = await initDB();
  return db.put('fotos', foto);
}

export async function getFotosByVistoria(vistoriaId: string) {
  const db = await initDB();
  return db.getAllFromIndex('fotos', 'by-vistoria', vistoriaId);
}
