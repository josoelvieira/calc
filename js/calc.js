var displayBuffer = "";
        var numero = "";
        var termo = [undefined, undefined, undefined]
        var resultado = undefined;

        function pressOperador(op) {
            if (termo[1] == undefined) {
                termo[0] = numero;
                termo[1] = op.innerHTML;
                verdisplay(op.innerHTML);
                numero = "";
            }

        }

        function pressIgual() {
            if (termo[0] != undefined && termo[1] != undefined && numero != "") {
                termo[2] = numero;
                var resltpassado;
                switch (termo[1]) {
                    case '+':
                        resultado = Number(termo[0]) + Number(termo[2]);
                        break;
                    case '-':
                        resultado = Number(termo[0]) - Number(termo[2]);
                        break;
                    case '*':
                        resultado = Number(termo[0]) * Number(termo[2]);
                        break;
                    case '/':
                        resultado = Number(termo[0]) / Number(termo[2]);
                        break;
                }
                resltpassado = resultado;
                limpaDisplay();
                verdisplay(resultado);
                limpa();
                numero = resltpassado.toString();
            }

        }

        function pressNum(num) {
            numero = numero.concat(num.innerHTML);
            verdisplay(num.innerHTML);
        }

        function limpa() {
            numero = "";
            termo = [undefined, undefined, undefined];
            resultado = undefined;
        }

        function limpaDisplay() {
            displayBuffer = "";
            var tela = document.getElementById('display');
            tela.value = displayBuffer;
        }

        function limpatudo() {
            limpa();
            limpaDisplay();
        }

        function verdisplay(conteudo) {
            displayBuffer = displayBuffer.concat(conteudo);
            var tela = document.getElementById('display');
            tela.value = displayBuffer;
        }