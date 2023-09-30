terraform {
  backend "azurerm" {
    resource_group_name  = "anand-sample-storage-acc"
    storage_account_name = "sampletfstatestore"
    container_name       = "sampletfstatestoragecontainer"
    key                  = "terraform.tfstate"
  }
}
