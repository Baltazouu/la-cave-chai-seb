#!/bin/bash

# Dossier cible (par défaut le dossier courant)
DIR="."
echo "Rotation des fichiers WebP dans le dossier : $DIR"

# Parcourir tous les fichiers .webp dans le dossier
for file in "$DIR"/*.webp; do
    # Vérifier si le fichier existe pour éviter les erreurs
    if [ -f "$file" ]; then
        # Créer un fichier temporaire pour la rotation
        temp_file="${file%.webp}_rotated.webp"

        # Appliquer une rotation de 90 degrés vers la droite
        magick convert "$file" -rotate 90 "$temp_file"

        # Remplacer l'ancien fichier par le fichier temporaire
        mv "$temp_file" "$file"

        echo "Rotaté : $file"
    fi
done

echo "Rotation terminée."
