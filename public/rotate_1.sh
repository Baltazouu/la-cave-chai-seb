#!/bin/bash

# Nom du fichier à traiter (à modifier ici)
file="compagnie_des_indes.webp"

# Vérifier si le fichier existe
if [ -f "$file" ]; then
    # Créer un fichier temporaire pour la rotation
    temp_file="${file%.webp}_rotated.webp"

    # Appliquer une rotation de 90 degrés vers la droite
    magick convert "$file" -rotate 180 "$temp_file"

    # Remplacer l'ancien fichier par le fichier temporaire
    mv "$temp_file" "$file"

    echo "Rotaté : $file"
else
    echo "Erreur : le fichier $file n'existe pas."
fi
