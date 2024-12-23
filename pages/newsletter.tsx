import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";
import theme from "@src/theme/theme";

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(event) {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
  };
}

interface NewsLetterTextFieldProps {
  placeholder?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewsLetterTextField(props: NewsLetterTextFieldProps) {
  return (
    <Box styleSheet={{ width: "100%", marginBottom: "16px" }}>
      <BaseComponent
        as="input"
        {...props}
        styleSheet={{
          border: `1px solid ${theme.colors.neutral.x300}`,
          borderRadius: "8px",
          padding: "12px",
          fontSize: "16px",
          width: "100%",
          boxSizing: "border-box",
          outline: "none",
          transition: "border-color 0.2s",
          ":focus": {
            borderColor: theme.colors.primary.x500,
          },
        }}
      />
    </Box>
  );
}

export default function NewsletterScreen() {
  const form = useForm({ initialValues: { emailNewsletter: "" } });

  return (
    <Box
      styleSheet={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: theme.colors.neutral.x050,
        padding: "16px",
      }}
    >
      <Box
        styleSheet={{
          backgroundColor: theme.colors.neutral.x000,
          borderRadius: "16px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <Image
          src="https://github.com/lmoraesdev.png"
          alt="Foto do lmoraesdev"
          styleSheet={{
            alignSelf: "center",
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            marginBottom: "16px",
            border: `4px solid ${theme.colors.primary.x500}`,
          }}
        />
        <Text
          variant="heading2"
          styleSheet={{
            fontWeight: "600",
            color: theme.colors.neutral.x800,
            marginBottom: "16px",
          }}
        >
          Newsletter do Leandro Moraes
        </Text>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const email = form.values.emailNewsletter;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
              alert("Você precisa informar um email válido");
              return;
            }
            alert("Cadastrado com sucesso");
          }}
        >
          <NewsLetterTextField
            placeholder="Informe seu email"
            name="emailNewsletter"
            value={form.values.emailNewsletter}
            onChange={form.handleChange}
          />
          <Button
            fullWidth
            styleSheet={{
              width: "100%",
              backgroundColor: theme.colors.primary.x500,
              color: theme.colors.neutral.x000,
              borderRadius: "8px",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background-color 0.2s",
              ":hover": {
                backgroundColor: theme.colors.primary.x600,
              },
            }}
          >
            Cadastrar
          </Button>
        </form>
      </Box>
    </Box>
  );
}
