module.exports = function(eleventyConfig) {
    // Copia los archivos estáticos
    eleventyConfig.addPassthroughCopy({ "assets": "assets" });
    
    // Copia el archivo de configuración de admin
    eleventyConfig.addPassthroughCopy({ "src/admin.yml": "admin/config.yml" });
    
    // Filtro para fechas
    eleventyConfig.addFilter("dateFilter", function(date) {
        return new Date(date).toLocaleDateString('es-AR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};