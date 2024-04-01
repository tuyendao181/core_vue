<?php

namespace App\api\Master\Requests\M301;

use AnsRequest;
use App\api\Master\Models\M301\SearchCondition;

class SearchConditionRequest extends AnsRequest
{
    public function makeKeyRefer(): SearchCondition
    {
        return new SearchCondition($this->all());
    }
}