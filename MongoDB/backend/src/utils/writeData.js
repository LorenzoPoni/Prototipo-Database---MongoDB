const Animale = require('../../modelli/animale');

async function writeData(req, res) {
    const nomeanimale = String(req.body?.nome || '').trim();

    if (!nomeanimale) {
        return res.status(400).json({ error: 'Il campo nome è obbligatorio.' });
    }

    console.log(nomeanimale);

    try {
        const newAnimale = new Animale({
            nome: nomeanimale,
            presente: true
        });

        const item = await newAnimale.save();
        console.log(item);
        return res.status(201).json({ message: 'Dati salvati correttamente', item });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore durante il salvataggio nel database.' });
    }
}

module.exports = { writeData };