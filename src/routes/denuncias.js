const express = require('express');
const { z } = require('zod');
const prisma = require('../lib/prisma');

const router = express.Router();

// Rota para postar denúncias
router.post('/', async (req, res) => {
  const denunciaSchema = z.object({
    title: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    description: z.string(),
  });

  try {
    const {
      title, latitude, longitude, description,
    } = denunciaSchema.parse(req.body);

    const denuncia = await prisma.denuncias.create({
      data: {
        title,
        latitude,
        longitude,
        description,
      },
    });

    res.status(201).json(denuncia);
  } catch (error) {
    res.status(400).json({ error: 'Dados inválidos no corpo da solicitação' });
  }
});

// Rota para obter todas as denúncias
router.get('/', async (req, res) => {
  try {
    // Busca todas as denúncias no banco de dados usando o Prisma
    const denuncias = await prisma.denuncias.findMany();

    // Verifica se há denúncias
    if (denuncias.length === 0) {
      return res.status(404).json({ message: 'Nenhuma denúncia encontrada' });
    }

    // Retorna as denúncias como resposta no formato JSON
    res.json(denuncias);
  } catch (error) {
    console.error('Erro ao recuperar denúncias:', error);
    res.status(500).json({ error: 'Erro ao recuperar denúncias' });
  }
});

// Rota para obter uma unica denúncia
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Busca todas as denúncias no banco de dados usando o Prisma
    const denuncias = await prisma.denuncias.findMany({
      where: {
        id,
      },
    });

    // Verifica se há denúncias
    if (denuncias.length === 0) {
      return res.status(404).json({ message: 'Nenhuma denúncia encontrada' });
    }

    // Retorna as denúncias como resposta no formato JSON
    res.json(denuncias);
  } catch (error) {
    console.error('Erro ao recuperar denúncias:', error);
    res.status(500).json({ error: 'Erro ao recuperar denúncias' });
  }
});

module.exports = router;
