#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Récupérer le nom du dossier à partir des arguments de la ligne de commande
const folderName = process.argv[2].split("=")[1];

if (!folderName) {
  console.error(
    "Veuillez spécifier un nom de dossier avec le paramètre --namefolder"
  );
  process.exit(1);
}

// Définir le chemin du dossier parent "RCQ" dans "src"
const parentFolderPath = path.join(process.cwd(), "src", "RCQ");

// Créer le dossier "RCQ" s'il n'existe
if (!fs.existsSync(parentFolderPath)) {
  fs.mkdirSync(parentFolderPath, { recursive: true });
  console.log(`Dossier src/rcq créé avec succès.`);
}

// Créer le dossier à l'intérieur de "RCQ"
const folderPath = path.join(parentFolderPath, folderName);
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`Dossier ${folderName} créé avec succès dans src/rcq.`);
} else {
  console.log(`Dossier ${folderName} existe déjà dans src/rcq.`);
}

// Contenu des fichiers
const queryContent = `
const queryGetAll${folderName} = "SELECT * FROM ${folderName}";
exports.queryGetAll${folderName} = queryGetAll${folderName};
`;

const controllerContent = `
const { queryGetAll${folderName} } = require("./Query");
const { handleRequest } = require("../../config/refactor");

exports.getAll${folderName} = async (req, res) => {
  handleRequest(res, queryGetAll${folderName});
};
`;

const routerContent = `
const express = require("express");
const router${folderName} = express.Router();
const ${folderName} = require("./Controller");

router${folderName}
  .route("/${folderName}")
  .get(${folderName}.getAll${folderName});

module.exports = router${folderName};
`;

// Créer les fichiers avec le contenu
const files = [
  { name: "Query.js", content: queryContent },
  { name: "Controller.js", content: controllerContent },
  { name: "Router.js", content: routerContent },
];

files.forEach(file => {
  const filePath = path.join(folderPath, file.name);
  fs.writeFileSync(filePath, file.content, "utf8");
  console.log(
    `Fichier ${file.name} créé avec succès dans le dossier ${folderName}.`
  );
});
