<template>

  <div class="header-bg">
    <div class="sb__header">
        <div class="sb__header-links">
            <div class="sb__header-links_logo">
                <a href="https://mamikos.com/">
                    <img src="https://mamikos.com/assets/logo/svg/logo_mamikos_green_v2.svg" />
                </a>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header'

}
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
    color: black;
}

.header-bg {
    width: 100%;
    // position: fixed;
    z-index: 2;
}

.sb__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid #1baa56;
    margin: 1.5rem 2rem;
    padding: auto 2rem;
    // background-color: #1baa56;
}

.sb__header-links {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sb__header-links_logo img {
    padding: 0.7rem 1.5rem;
    width: 100%;
    height: auto;
    // background-color: white;
}

// responsive

@media screen and (max-width:700px) {
    .sb__header {
        padding: 0.5rem 1rem;
    }
}

@media screen and (max-width:550px) {
    .sb__header {
        padding: 0.5rem;
    }

    .sb__header-links_logo {
        padding: 0.4rem 1rem;
    }
}
</style>
