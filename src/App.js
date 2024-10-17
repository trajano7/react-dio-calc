import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Keyboard, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const addNumberHandler = (number) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
  };

  const toggleSignHandler = () => {
    setCurrentNumber((prev) => {
      if (prev === '0') {
        return prev;
      }
      return prev.startsWith('-') ? prev.slice(1) : `-${prev}`;
    });
  };

  const setOperationHandler = (newOperation) => {
    if (firstNumber === '0' && !operation) {
      console.log("ola3", newOperation);
      setOperation(newOperation);
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }
  }

  const calculateResultHandler = () => {
    let result;
    console.log("ola1")
    console.log(operation);
    switch (operation) {
      case '/':
        result =
          currentNumber === '0'
            ? "Error"
            : Number(firstNumber) / Number(currentNumber);
        break;
      case '*':
        console.log("ola2")
        result = Number(firstNumber) * Number(currentNumber);
        break;
      case '+':
        result = Number(firstNumber) + Number(currentNumber);
        break;
      case '-':
        result = Number(firstNumber) - Number(currentNumber);
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setOperation('');
    setFirstNumber('0');
  };

  const deleteNumberHandler = () => {
    setCurrentNumber((prev) => {
      if (prev === '0' || prev.length === 1) {
        return '0';
      }
      return prev.slice(0, -1);
    });
  };

  const clearNumberHandler = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const percentageHandler = () => {
    setCurrentNumber(prev => prev === '0' ? prev : prev / 100);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Keyboard>
          <Row>
            <Button label='AC' onClick={clearNumberHandler} />
            <Button label='DEL' onClick={deleteNumberHandler} />
            <Button label='%' onClick={percentageHandler} />
            <Button label='/' onClick={() => setOperationHandler('/')} />
          </Row>
          <Row>
            <Button label='7' onClick={() => addNumberHandler('7')} />
            <Button label='8' onClick={() => addNumberHandler('8')} />
            <Button label='9' onClick={() => addNumberHandler('9')} />
            <Button label='*' onClick={() => setOperationHandler('*')} />
          </Row>
          <Row>
            <Button label='4' onClick={() => addNumberHandler('4')} />
            <Button label='5' onClick={() => addNumberHandler('5')} />
            <Button label='6' onClick={() => addNumberHandler('6')} />
            <Button label='+' onClick={() => setOperationHandler('+')} />
          </Row>
          <Row>
            <Button label='1' onClick={() => addNumberHandler('1')} />
            <Button label='2' onClick={() => addNumberHandler('2')} />
            <Button label='3' onClick={() => addNumberHandler('3')} />
            <Button label='-' onClick={() => setOperationHandler('-')} />
          </Row>
          <Row>
            <Button label='±' onClick={toggleSignHandler} />
            <Button label='0' onClick={() => addNumberHandler('0')} />
            <Button label='.' onClick={() => addNumberHandler('.')} />
            <Button label='=' onClick={calculateResultHandler} />
          </Row>
        </Keyboard>
      </Content>
    </Container>
  );
}

export default App;
