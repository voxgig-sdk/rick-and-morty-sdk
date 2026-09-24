"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RickAndMortyError = void 0;
class RickAndMortyError extends Error {
    isRickAndMortyError = true;
    sdk = 'RickAndMorty';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.RickAndMortyError = RickAndMortyError;
//# sourceMappingURL=RickAndMortyError.js.map