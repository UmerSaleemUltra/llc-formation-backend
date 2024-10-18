import express from 'express';
import LLC from '../models/LLC.js';

const router = express.Router();

// Get all LLCs
router.get('/', async (req, res) => {
    try {
        const llcs = await LLC.find();
        res.json(llcs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new LLC
router.post('/', async (req, res) => {
    const llc = new LLC(req.body);
    try {
        const newLLC = await llc.save();
        res.status(201).json(newLLC);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Edit an LLC
router.put('/:id', async (req, res) => {
    try {
        const llc = await LLC.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(llc);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an LLC
router.delete('/:id', async (req, res) => {
    try {
        await LLC.findByIdAndDelete(req.params.id);
        res.json({ message: 'LLC deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
