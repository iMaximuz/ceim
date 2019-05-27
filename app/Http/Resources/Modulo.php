<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\Material as MaterialResource;

class Modulo extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
            'curso' => $this->whenLoaded('curso', function() {
                return [
                    'id' => $this->curso->id,
                    'nombre' => $this->curso->nombre
                ];
            }, $this->curso_id),
            'materiales' => MaterialResource::collection($this->materiales)
        ];
    }
}
