<template>
  <div class="footer">
    <div class="column">
      <h1>Compony</h1>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Vacancy</li>
        <li>Compony</li>
      </ul>
    </div>

    <div class="column">
      <h1>User</h1>
      <ul>
        <li>Axrorbek Kochkorov</li>
        <li>Azizbek Kochkorov</li>
        <li>Ikromiddinov Bahodirjon</li>
      </ul>
    </div>

    <div class="column footer-contact">
      <h1>Contact Us</h1>
      <input type="text" placeholder="Enter email here">
      <button>Send Email</button>
    </div>
  </div>

</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  //width: 80%;
  justify-content: space-between;
  margin-top: 50px;
  padding: 50px 10%;
  background: #fafafa;
  border-radius: 0 0 1rem 1rem;

  .footer-contact {
    width: 300px !important;
  }

  .column {
    width: 250px;
    margin-bottom: 20px;

    input {
      width: 100%;
      padding: 10px 20px;
      border: 1px solid rgba(0, 0, 0, 0.34);
    }

    input:focus {
      outline: none;
    }

    button {
      padding: 10px 20px;
      background: var(--color);
      border: 1px solid white;
      margin-top: 10px;
      color: white;
    }

    ul {
      list-style: none;

      li {
        margin-top: 10px;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .footer {
    .column {
      width: 150px;

      h1 {
        font-size: 18px;
      }

      ul {
        li {
          font-size: 12px;
        }
      }
    }
  }
}

</style>