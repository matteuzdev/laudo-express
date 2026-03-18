import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface InspectDB extends DBSchema {
  inspections: {
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
      inspectId: string;
      blob: Blob;
      comentario?: string;
      comodo: string;
      data: string;
    };
    indexes: { 'by-inspect': string };
  };
}

const DATABASE_NAME = 'inspectify-db-v2';
const DATABASE_VERSION = 1;

export async function initDB(): Promise<IDBPDatabase<InspectDB>> {
  return openDB<InspectDB>(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      const inspectionStore = db.createObjectStore('inspections', {
        keyPath: 'id',
      });
      inspectionStore.createIndex('by-status', 'status');

      const fotoStore = db.createObjectStore('fotos', {
        keyPath: 'id',
      });
      fotoStore.createIndex('by-inspect', 'inspectId');
    },
  });
}

export async function saveInspection(inspection: InspectDB['inspections']['value']) {
  const db = await initDB();
  return db.put('inspections', inspection);
}

export async function getInspections() {
  const db = await initDB();
  return db.getAll('inspections');
}

export async function saveFoto(foto: InspectDB['fotos']['value']) {
  const db = await initDB();
  return db.put('fotos', foto);
}

export async function getFotosByInspection(inspectId: string) {
  const db = await initDB();
  return db.getAllFromIndex('fotos', 'by-inspect', inspectId);
}