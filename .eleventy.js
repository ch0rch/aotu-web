module.exports = function(eleventyConfig) {
    // Copia los archivos estáticos
    eleventyConfig.addPassthroughCopy({ "assets": "assets" });
    
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