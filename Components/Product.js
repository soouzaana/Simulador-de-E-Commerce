app.component("product-display", {
  setup() {
    const image = ref("./assets/images/t-shirt-blue.png");
    const changeImage = (variantimage) => {
      image.value = variantimage;
    };

    const product_title = "T-Shirt";
    const brand = "Ann 4 You";
    const titleWidthBrand = computed(() => {
      return product_title + " " + brand;
    });

    const inStock = 20;
    const inStockComputed = computed(() => {
      if (inStock > 10) return "In Stock";
      else if (inStock <= 10 && inStock > 1) return "Almost of out";
      else return "Out of Stock";
    });

    return {
      image,
      details: ["50% Cotton", "30% Polyester", "20% Wool"],
      variants: [
        { id: 1, color: "blue", image: "./assets/images/t-shirt-blue.png" },
        { id: 2, color: "green", image: "./assets/images/t-shirt-green.png" },
      ],
      changeImage,
      titleWidthBrand,
      inStockComputed,
    };
  },
  template: `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" alt="img-product">
        </div>
        <div class="product-info">
          <h1>{{ titleWidthBrand }}</h1>
          <p>{{ inStockComputed }}</p>
          <ul>
            <li v-for="detail in details">
              {{ detail }}
            </li>
          </ul>
          
          <div 
          v-for="variant in variants" 
          :key="variant.id" 
          @mouseover="changeImage(variant.image)"
          class="color-circle"
          :style="{backgroundColor: variant.color}"
          >
          </div>
          <button 
          class="button"
          :class="{ disabledButton : inStock < 1}"
          @click="$emit('add-to-cart')"
          :disabled="inStock < 1"
          > Add to Cart</button>
        </div>
      </div>
    </div>`,
});
