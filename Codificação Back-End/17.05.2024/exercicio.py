def somar(numero1, numero2):
    return numero1 + numero2

def subtrair(numero1, numero2):
    return numero1 - numero2

def multiplicar(numero1, numero2):
    return numero1 * numero2

def dividir(numero1, numero2):
    return numero1 / numero2

while True:
    operacao = input("Digite a operação que você deseja realizar: \n somar \n subtrair \n multiplicar \n dividir \n -->")
    x = int(input("Digite um número"))
    y = int(input("Digite um número"))

    if operacao == "somar":
        resultado = somar(x,y)
        print(resultado)
        print("")
    elif operacao == "subtrair":
            resultado = subtrair(x,y)
            print(resultado)
            print("")
    elif operacao == "multiplicar":
            resultado = multiplicar(x,y)
            print(resultado)
            print("")
    elif operacao == "dividir":
            resultado = dividir(x,y)
            print(resultado)
            print("")
    else: 
         break        
                            