module.exports = function(eleventyConfig) {
    // Copia los archivos estáticos
    eleventyConfig.addPassthroughCopy({ "assets": "assets" });
    
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
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        pathPrefix: "/"
    };
};