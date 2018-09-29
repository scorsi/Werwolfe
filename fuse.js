const {FuseBox, Sparky, BabelPlugin, CSSPlugin, SassPlugin, CSSResourcePlugin, QuantumPlugin} = require("fuse-box");
const sass = require("node-sass");

let fuse = undefined;

const fuseOptions = {
  homeDir: "./src/",
  output: "dist/$name.js",
  sourceMaps: {inline: true, vendor: true},
  useTypescriptCompiler: false,
  plugins: [
    BabelPlugin({
      config: {
        presets: ["es2015"],
        plugins: [["inferno"], ["cerebral"]],
      },
    }),
  ]
};
const fuseClientOptions = {
  ...fuseOptions
};
const fuseServerOptions = {
  ...fuseOptions
};

Sparky.task("clean", () => {
  Sparky.src("dist")
    .clean("dist")
    .exec();
});

Sparky.task("config", () => {
  fuse = FuseBox.init(fuseOptions);
  fuse.dev();
});

Sparky.task("compileAsset", () => {
  console.log("compiling assets");
  sass.render({
    file: './src/assets/styles/index.scss',
    outFile: './dist/client/styles/index.css'
  })
});

Sparky.task("asset", () => {
  Sparky.watch("./src/assets/**")
    .exec("compileAsset")
});

Sparky.task("client", () => {
  fuse.opts = fuseClientOptions;
  fuse.bundle("client/bundle")
    .target("browser@esnext")
    .watch("src/client/**")
    .hmr()
    .instructions("> client/index.js");
});

Sparky.task("server", () => {
  fuse.opts = fuseServerOptions;
  fuse
    .bundle("server/bundle")
    .watch("**")
    .target("server@esnext")
    .instructions("> [server/index.js]")
    .completed(proc => {
      proc.require({
        close: ({FuseBox}) => FuseBox.import(FuseBox.mainFile).shutdown()
      });
    });
});

Sparky.task("dev", ["clean", "config", "client", "server"], () => {
  fuse.run();
});
