<?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 * @category Piwik
 * @package Piwik
 */

namespace Piwik\Tracker;

use Piwik\Tracker;
use Piwik\Config;

/**
 * An Event is composed of a URL, a Category name, an Action name, and optionally a Name and Value.
 *
 * @package Piwik\Tracker
 */
class ActionEvent extends Action
{
    function __construct($eventCategory, $eventAction, $url, Request $request)
    {
        parent::__construct(Action::TYPE_EVENT, $request);
        $this->setActionUrl($url);
        $this->eventCategory = $eventCategory;
        $this->eventAction = $eventAction;

        $this->eventName = $request->getParam('e_n');
        $this->eventValue = $request->getParam('e_v');
    }

    function getCustomFloatValue()
    {
        return $this->eventValue;
    }

    protected function getActionsToLookup()
    {
        $actions = array(
            'idaction_url' => $this->getUrlAndType()
        );

        if(strlen($this->eventName) > 0) {
            $actions['idaction_name'] = array($this->eventName, Action::TYPE_EVENT_NAME);
        }
        if(strlen($this->eventCategory) > 0) {
            $actions['idaction_event_category'] = array($this->eventCategory, Action::TYPE_EVENT_CATEGORY);
        }
        if(strlen($this->eventAction) > 0) {
            $actions['idaction_event_action'] = array($this->eventAction, Action::TYPE_EVENT_ACTION);
        }
        return $actions;
    }

    // Do not track this Event URL as Entry/Exit Page URL (leave the existing entry/exit)
    public function getIdActionUrlForEntryAndExitIds()
    {
        return false;
    }

    // Do not track this Event Name as Entry/Exit Page Title (leave the existing entry/exit)
    public function getIdActionNameForEntryAndExitIds()
    {
        return false;
    }

}