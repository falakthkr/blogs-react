import { Card, Col, Row } from 'antd';

const style = {
    padding: '8px 0',
};

const Cards = () => (
    <div>
        <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col><Col className="gutter-row" span={6}>
                <div style={style}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);
export default Cards;