router.route('/add').post((req, res) =>{
    const userName= req.body.userName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        userName,
        description,
        duration,
        date,
    });
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json ('Error: ' + err));
});

module.exports = router;