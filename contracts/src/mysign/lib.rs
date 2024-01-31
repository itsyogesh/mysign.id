#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod mysign {
    use openbrush::{
        contracts::ownable::*,
        contracts::psp34::extensions::{enumerable::*, metadata::*, mintable::*},
        traits::{Storage, String},
    };

    #[derive(Default, Storage)]
    pub struct Mysign {
        #[storage_field]
        psp34: psp34::Data<enumerable::Balances>,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        metadata: metadata::Data,
    }

    impl PSP34 for Mysign {}
    impl Ownable for Mysign {}
    impl PSP34Mintable for Mysign {
        #[openbrush::modifiers(only_owner)]
        fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
            self._mint_to(account, id)
        }
    }
    impl PSP34Enumerable for Mysign {}
    impl PSP34Metadata for Mysign {}

    impl Mysign {
        pub fn new() -> Self {
            let mut instance = Self::default();
            instance._init_with_owner(instance.env().caller());
            let collection_id = instance.collection_id();
            instance._set_attribute(
                collection_id.clone(),
                String::from("name"),
                String::from("Mysign"),
            );
            instance._set_attribute(collection_id, String::from("symbol"), String::from("SIGN"));
            instance
        }

        pub fn mint(
            &mut self,
            account: AccountId,
            id: Id,
            https_url: String,
            verification_metadata: String,
        ) -> Result<(), PSP34Error> {
            if Self::env().transferred_value() != 1_000_000_000_000_000_000 {
                return Err(PSP34Error::Custom(String::from("BadMintValue")));
            }
            self._mint_to(account, id.clone())?;

            // Set attributes for the minted token
            self._set_attribute(id.clone(), String::from("https_url"), https_url);
            self._set_attribute(
                id,
                String::from("verification_metadata"),
                verification_metadata,
            );
        }
    }
}
