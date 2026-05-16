package core

type RickAndMortyError struct {
	IsRickAndMortyError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRickAndMortyError(code string, msg string, ctx *Context) *RickAndMortyError {
	return &RickAndMortyError{
		IsRickAndMortyError: true,
		Sdk:              "RickAndMorty",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RickAndMortyError) Error() string {
	return e.Msg
}
