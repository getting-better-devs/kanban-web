import { describe, expect, it } from '@jest/globals';
import { defaultLogin } from "../utils/validationLogin"

describe("Testando validação do login com email e password", () => {
    it("Testando login com email e password", () => {
        const esperado: boolean = true;
        const retorno: boolean = defaultLogin("email@gmail.com", "123")
        expect(retorno).toBe(esperado)
    })
})