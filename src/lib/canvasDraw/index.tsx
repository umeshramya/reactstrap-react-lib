import React, { useRef, useState, useEffect } from 'react';
import {
  Button,
  Input,
  FormGroup,
  Label,
  Container,
  Row,
  Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type DrawingTool = 'pen' | 'eraser';

const Draw: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(3);
  const [tool, setTool] = useState<DrawingTool>('pen');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 800;
    canvas.height = 600;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    contextRef.current = context;
  }, []);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.lineWidth = lineWidth;
    }
  }, [lineWidth]);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = tool === 'pen' ? color : '#FFFFFF';
    }
  }, [color, tool]);

  const getCoordinates = (e: React.PointerEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    return {
      offsetX: e.clientX - (rect?.left || 0),
      offsetY: e.clientY - (rect?.top || 0),
    };
  };

  const startDrawing = (e: React.PointerEvent) => {
    const { offsetX, offsetY } = getCoordinates(e);
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.PointerEvent) => {
    if (!isDrawing || !contextRef.current) return;
    const { offsetX, offsetY } = getCoordinates(e);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const savePrescription = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const imageURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'prescription.png';
      link.click();
    }
  };

  return (
    <Container className="py-4">
      <Row className="mb-3">
        <Col md="2">
          <FormGroup>
            <Label for="toolSelect">Tool</Label>
            <Input
              type="select"
              id="toolSelect"
              value={tool}
              onChange={(e) => setTool(e.target.value as DrawingTool)}
            >
              <option value="pen">Pen</option>
              <option value="eraser">Eraser</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md="2">
          <FormGroup>
            <Label for="colorPicker">Color</Label>
            <Input
              type="color"
              id="colorPicker"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{ padding: 0 }}
            />
          </FormGroup>
        </Col>

        <Col md="3">
          <FormGroup>
            <Label for="lineWidth">Line Width</Label>
            <Input
              type="range"
              id="lineWidth"
              min="1"
              max="20"
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
            />
          </FormGroup>
        </Col>

        <Col md="2" className="d-flex align-items-end">
          <Button color="danger" onClick={clearCanvas} className="w-100">
            Clear
          </Button>
        </Col>

        <Col md="3" className="d-flex align-items-end">
          <Button color="success" onClick={savePrescription} className="w-100">
            Save Prescription
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <canvas
            ref={canvasRef}
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerLeave={stopDrawing}
            style={{
              backgroundColor: 'white',
              border: '2px solid #000',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              touchAction: 'none',
              width: '100%',
              maxWidth: '800px',
              height: '600px',
              display: 'block',
              margin: 'auto',
              borderRadius: '8px',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Draw;
