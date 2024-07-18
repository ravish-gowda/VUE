<template>
<div class="cart">
    <header>
        <slot name="header"></slot>
    </header>
    <content>
        <slot name="content"></slot>
    </content>
    <footer>
        <slot name="footer"><button>Click me</button></slot>
    </footer>
</div>
</template>

<script>
export default {
    name: 'ChildSlots',

}
</script>

<style scoped>
.cart{
  border: 1px solid;
    width: 250px;
    text-align: center;
    padding: 20px;
    margin: 30px;
}
</style>
