<template>

  <div class="footer">
    <div class="sb__footer section__padding">
        <div class="sb__footer-below">
            <div class="sb__footer-copyright">
                <p>
                    Test Mamikos 2023 Suci Hidayati
                </p>
            </div>
        </div>


    </div>
</div>

</template>

<script>
export default {
  name: 'Footer'

}
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section_padding {
  padding: 4rem 4rem;

}

.footer {
  background-color: #1baa56;
  box-shadow: 100px;
  position: fixed;
  Width: 100%;
  bottom: 0;

}

.sb__footer {
  display: flex;
  flex-direction: column;
}

.sb__footer-below {
  // display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
}

.sb__footer-copyright p {
  font-size: 20px;
  line-height: 15px;
  color: white;
  font-weight: 600;
}


@media screen and (max-width:550px) {
  .sb__footer-below {
      // flex-direction: column;
      justify-content: center;
      padding: 0.5rem;

  }
}
</style>
