#!/bin/bash

# Dossier cible (par défaut le dossier courant)
DIR="."
echo "Conversion des fichiers JPG en WebP dans le dossier : $DIR"

# Parcourir tous les fichiers .jpg ou .jpeg dans le dossier
for file in "$DIR"/*.jpg "$DIR"/*.jpeg; do
    # Vérifier si le fichier existe pour éviter les erreurs en cas d'absence de fichiers
    if [ -f "$file" ]; then
        # Extraire le nom de fichier sans extension
        filename=$(basename "$file" .jpg)
        filename=$(basename "$filename" .jpeg)

        # Convertir en .webp
        output="$DIR/$filename.webp"
        cwebp "$file" -o "$output"

        echo "Converti : $file -> $output"
    fi
done

echo "Conversion terminée."

