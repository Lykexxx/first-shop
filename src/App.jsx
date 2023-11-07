import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'стул.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id?',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Диван',
          img: 'Диван.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id?',
          category: 'sofa',
          price: '499.99',
        },
        {
          id: 3,
          title: 'Тумбочка',
          img: 'тумба.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id?',
          category: 'tables',
          price: '249.99',
        },
        {
          id: 4,
          title: 'Диван 2',
          img: 'Диван.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id?',
          category: 'sofa',
          price: '499.99',
        },
        {
          id: 5,
          title: 'Стул 2',
          img: 'стул.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id?',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 6,
          title: 'Тумбочка 2',
          img: 'тумба.jpg',
          desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, id?',
          category: 'tables',
          price: '249.99',
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
