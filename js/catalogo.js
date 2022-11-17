//funcion constructora y agregando base de datos local de los productos para iteraccionar con ellos
class producto {
    constructor (id, nombre, tipo, calibre, capacidad, precio, img, cantidad, categoria){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo;
        this.calibre = calibre;
        this.capacidad = capacidad;
        this.precio = parseFloat(precio);
        this.img = img;
        this.cantidad = cantidad
        this.categoria = categoria
    }
}

const catalogo = [];

catalogo.push(new producto(1, "HK-USP", "Semiautomatica", "9mm", "16 mun.", 3500, "HK-USP.webp", 1, "Pistolas y Revolveres"));
catalogo.push(new producto(2, "DESERT EAGLE", "Semiautomatica", ".45 mm", "7 mun", 5500, "DESERT-EAGLE.webp", 1, "Pistolas y Revolveres"));
catalogo.push(new producto(3, "MAGNUM .44", "Semiautomatica", ".44 mm", "6 mun. (Tambor)", 5900, "MAGNUM-44.webp", 1, "Pistolas y Revolveres"));
catalogo.push(new producto(4, "GLOCK 17", "Semiautomatica", "9mm", "17 mun.", 4800, "GLOCK-17.webp", 1, "Pistolas y Revolveres"));
catalogo.push(new producto(5, "MP-5", "Sem. Aut./Automtica", "9mm", "30/40 mun.", 6500, "MP-5.webp", 1, "Subfusiles"));
catalogo.push(new producto(6, "UZI", "Sem. Aut./Automtica", "9mm", "25 mun.", 6900, "UZI.webp", 1, "Subfusiles"));
catalogo.push(new producto(7, "VZ61-SCORPION", "Sem. Aut./Automtica", "9mm", "27 mun.", 6900, "VZ61-Scorpion.webp", 1, "Subfusiles"));
catalogo.push(new producto(8, "P-90", "Sem. Aut./Automtica", "5.7 mm", "50 mun.", 7000, "P-90.webp", 1, "Subfusiles"));
catalogo.push(new producto(9, "AR-15", "Sem. Aut./Automtica", "5,56 mm", "30 mun.", 7800, "AR15.webp", 1, "Fusiles"));
catalogo.push(new producto(10, "AK-47", "Sem. Aut./Automtica", "7,62 mm", "30 mun.", 7800, "AK-47.webp", 1, "Fusiles"));
catalogo.push(new producto(11, "STEYR AUG", "Sem. Aut./Automtica", "5,56 mm", "30 mun.", 8900, "STEYR-AUG.webp", 1, "Fusiles"));
catalogo.push(new producto(12, "SCAR-L", "Sem. Aut./Automtica", "7,62 mm", "30 mun.", 9800, "SCAR-L.webp", 1, "Fusiles"));
catalogo.push(new producto(13, "M-249", "Sem. Aut./Automtica", "5,56 mm", "100/200 mun.", 11000, "M249.webp", 1, "Ametralladoras"));
catalogo.push(new producto(14, "HK-21", "Sem. Aut./Automtica", "7,62 mm", "100/200 mun.", 10500, "HK-21.webp", 1, "Ametralladoras"));
catalogo.push(new producto(15, "FN-MAG", "Sem. Aut./Automtica", "7,62 mm", "100 mun.", 10900, "FN-MAG.webp", 1, "Ametralladoras"));
catalogo.push(new producto(16, "KSP-LIGHT", "Sem. Aut./Automtica", "7,62 mm", "100 mun.", 10700, "KSP-LIGHT.webp", 1, "Ametralladoras"));
catalogo.push(new producto(17, "AKKAR TACTICAL", "Semiautomtica", "12", "8 cart.", 6500, "AKKAR.webp", 1, "Escopetas"));
catalogo.push(new producto(18, "LEGEND JW-2005", "Semiautomtica", "12", "8 cart.", 6900, "LEGEND-JW2005.webp", 1, "Escopetas"));
catalogo.push(new producto(19, "TAURUS ST-12", "Semiautomtica", "12", "8 cart.", 7500, "TAURUS-ST12.webp", 1, "Escopetas"));
catalogo.push(new producto(20, "ADLER HT-304", "Semiautomtica", "12", "8 cart.", 7200, "ADLER-HT304.webp", 1, "Escopetas"));

