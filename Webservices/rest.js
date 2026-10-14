const express = require('express');
const app = express();

app.use(express.json());

// ========================================
// STEP 1: APPLICATION DETAILS
// Change these according to the question
// ========================================

const APP_NAME = "Student";
const ROUTE = "/api/students";
const PORT = 4000;

// ========================================
// STEP 2: SAMPLE DATA
// Change fields according to the question
// ========================================

let records = [
    { id: 1, name: "Arun", department: "IT" },
    { id: 2, name: "Bala", department: "CSE" }
];

let nextId = 3;

// ========================================
// STEP 3: GET - RETRIEVE ALL RECORDS
// ========================================

app.get(ROUTE, (req, res) => {
    res.status(200).json(records);
});

// ========================================
// STEP 4: GET - RETRIEVE RECORD BY ID
// ========================================

app.get(ROUTE + "/:id", (req, res) => {

    const record = records.find(
        r => r.id === Number(req.params.id)
    );

    if (!record) {
        return res.status(404).json({
            error: APP_NAME + " not found"
        });
    }

    res.status(200).json(record);
});

// ========================================
// STEP 5: POST - ADD A NEW RECORD
// ========================================

app.post(ROUTE, (req, res) => {

    const record = {
        id: nextId++,
        ...req.body
    };

    records.push(record);

    res.status(201).json(record);
});

// ========================================
// STEP 6: PUT - UPDATE A RECORD
// ========================================

app.put(ROUTE + "/:id", (req, res) => {

    const index = records.findIndex(
        r => r.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            error: APP_NAME + " not found"
        });
    }

    records[index] = {
        ...records[index],
        ...req.body,
        id: records[index].id
    };

    res.status(200).json(records[index]);
});

// ========================================
// STEP 7: DELETE - REMOVE A RECORD
// ========================================

app.delete(ROUTE + "/:id", (req, res) => {

    const index = records.findIndex(
        r => r.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            error: APP_NAME + " not found"
        });
    }

    const deleted = records.splice(index, 1);

    res.status(200).json({
        message: APP_NAME + " deleted successfully",
        record: deleted[0]
    });
});

// ========================================
// STEP 8: START THE SERVER
// ========================================

app.listen(PORT, () => {
    console.log(
        APP_NAME + " REST service running at http://localhost:"
        + PORT + ROUTE
    );
});